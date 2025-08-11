import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export const SectionWhy = () => {

  const titleRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);

  const isTitleInView = useInView(titleRef, { once: true, amount: 0.2 });
  const isBox1InView = useInView(box1Ref, { once: true, amount: 0.2 });
  const isBox2InView = useInView(box2Ref, { once: true, amount: 0.2 });
  const isBox3InView = useInView(box3Ref, { once: true, amount: 0.2 });
  const isBox4InView = useInView(box4Ref, { once: true, amount: 0.2 });

  // Enhanced title animation variants
  const titleVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        staggerChildren: 0.3,
      },
    },
  };

  const titleWordVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      rotateX: -90,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  // Enhanced card animation variants
  const cardVariants = {
    hidden: { 
      y: 100, 
      opacity: 0,
      scale: 0.8,
      rotateY: -15,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };


  return (
    <section
      id="why-choose"
      className="w-full flex flex-col items-center justify-start bg-white pb-10"
    >
      {/* Judul */}
      <motion.div
        ref={titleRef}
        variants={titleVariants}
        initial="hidden"
        animate={isTitleInView ? "visible" : "hidden"}
        className="hidden md:flex flex-row flex-wrap justify-center items-center gap-4 p-4 text-center md:pb-20 lg:pb-40"
      >
        <motion.div
          variants={titleWordVariants}
          whileHover={{
            scale: 1.05,
            color: "#ea3697",
            textShadow: "0 0 20px rgba(234, 54, 151, 0.3)",
            transition: { duration: 0.3 },
          }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 cursor-default">
            {"Why Choose".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
        </motion.div>
        
        <motion.div
          variants={titleWordVariants}
          whileHover={{
            scale: 1.05,
            color: "#ea3697",
            textShadow: "0 0 20px rgba(234, 54, 151, 0.3)",
            transition: { duration: 0.3 },
          }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 cursor-default">
            {"Halcy Hijab?".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: (index + 11) * 0.05, // Continue from previous word
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
        </motion.div>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl px-6">
        {/* Box 1 */}
        <motion.div
          ref={box1Ref}
          variants={cardVariants}
          initial="hidden"
          animate={isBox1InView ? "visible" : "hidden"}
          whileHover="hover"
          style={{ perspective: "1000px" }}
        >
          <Card
            img="/why1.png"
            title="Sustainable Fabrics"
            desc="Each of our hijabs is made from high-quality, eco-conscious fabrics..."
          />
        </motion.div>

        {/* Box 2 */}
        <motion.div
          ref={box2Ref}
          variants={cardVariants}
          initial="hidden"
          animate={isBox2InView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
          whileHover="hover"
          style={{ perspective: "1000px" }}
        >
          <Card
            img="/why2.png"
            title="Conscious Design"
            desc="Our designs cater to modern, modest fashion..."
          />
        </motion.div>

        {/* Box 3 */}
        <motion.div
          ref={box3Ref}
          variants={cardVariants}
          initial="hidden"
          animate={isBox3InView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
          whileHover="hover"
          style={{ perspective: "1000px" }}
        >
          <Card
            img="/why3.png"
            title="Premium Quality"
            desc="We select only the finest materials to provide long-lasting hijabs..."
          />
        </motion.div>

        {/* Box 4 */}
        <motion.div
          ref={box4Ref}
          variants={cardVariants}
          initial="hidden"
          animate={isBox4InView ? "visible" : "hidden"}
          transition={{ delay: 0.6 }}
          whileHover="hover"
          style={{ perspective: "1000px" }}
        >
          <Card
            img="/why4.png"
            title="Elegant & Comfortable"
            desc="Our hijabs are designed to give you the comfort you deserve..."
          />
        </motion.div>
      </div>
    </section>
  );
};

type CardProps = {
  img: string;
  title: string;
  desc: string;
}

const Card: React.FC<CardProps> = ({ img, title, desc }) => (
  <motion.div 
    className="flex flex-col items-center text-center"
    whileHover={{
      scale: 1.02,
      transition: { duration: 0.3 }
    }}
  >
    <motion.div 
      className="w-24 h-24 rounded-full bg-[#f9e1e7] flex items-center justify-center mb-4 relative overflow-hidden"
      whileHover={{
        scale: 1.1,
        rotate: 5,
        boxShadow: "0 10px 25px rgba(249, 225, 231, 0.5)",
        transition: { duration: 0.3 }
      }}
      animate={{
        y: [0, -2, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }
      }}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 1,
          background: "radial-gradient(circle, rgba(234, 54, 151, 0.1) 0%, transparent 70%)",
          transition: { duration: 0.3 }
        }}
      />
      
      <motion.div
        whileHover={{
          scale: 1.15,
          rotate: -5,
          transition: { duration: 0.3 }
        }}
        animate={{
          rotate: [0, 2, -2, 0],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
      >
        <Image src={img} alt={title} width={100} height={100} />
      </motion.div>
    </motion.div>

    <motion.h3 
      className="text-xl font-semibold text-gray-800 mb-2"
      whileHover={{
        color: "#ea3697",
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
    >
      {title.split("").map((char, index) => (
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
    </motion.h3>

    <motion.p 
      className="text-gray-600"
      whileHover={{
        color: "#4a5568",
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      {desc}
    </motion.p>
  </motion.div>
);