import React, { useRef } from 'react'
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

export const SectionShop = () => {
  const titleRef = useRef(null);
  const product1Ref = useRef(null);
  const product2Ref = useRef(null);
  const product3Ref = useRef(null);
  const product4Ref = useRef(null);
  const buttonRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const isProduct1InView = useInView(product1Ref, { once: true, amount: 0.2 });
  const isProduct2InView = useInView(product2Ref, { once: true, amount: 0.2 });
  const isProduct3InView = useInView(product3Ref, { once: true, amount: 0.2 });
  const isProduct4InView = useInView(product4Ref, { once: true, amount: 0.2 });
  const isButtonInView = useInView(buttonRef, { once: true, amount: 0.5 });

  // Title animation variants
  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
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

  // Product card animation variants
  const productVariants = {
    hidden: { 
      opacity: 0,
      y: 80,
      scale: 0.8,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // Button animation variants
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
      id="our-shop"
      className="w-full min-h-screen flex items-center justify-center bg-white lg:pt-35 pb-10 md:pt-10"
    >
      <div className="sm:px-6 lg:px-10 relative">
        
        {/* Judul */}
        <motion.div
          ref={titleRef}
          variants={titleVariants}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="hidden md:block text-4xl font-bold text-gray-800 text-center pb-10"
            whileHover={{
              scale: 1.02,
              color: "#ea3697",
              transition: { duration: 0.3 }
            }}
          >
            {"Our Best-Selling Premium Hijab Collection".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.02,
                  ease: "easeOut" as const,
                }}
                whileHover={{
                  y: -3,
                  transition: { duration: 0.2 }
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>
        </motion.div>

        {/* Grid Produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          
          {/* Produk 1: Pashmina Kaos Celestia Premium */}
          <motion.div 
            ref={product1Ref}
            variants={productVariants}
            initial="hidden"
            animate={isProduct1InView ? "visible" : "hidden"}
            whileHover={{
              y: -10,
              scale: 1.03,
              transition: { duration: 0.3 }
            }}
            className="flex flex-col items-start text-left"
            style={{ perspective: "1000px" }}
          >
            <ProductCard
              src="/HalcyKatalog1.png"
              alt="Pashmina Kaos Celestia Premium"
              brand="HALCY"
              title="Pashmina Kaos Celestia Premium"
              price="Rp 49.900"
              originalPrice="Rp 98.000"
              reviews="729 Reviews"
            />
          </motion.div>

          {/* Produk 2: Paris Voalette Hijab Persegi Premium */}
          <motion.div 
            ref={product2Ref}
            variants={productVariants}
            initial="hidden"
            animate={isProduct2InView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            whileHover={{
              y: -10,
              scale: 1.03,
              transition: { duration: 0.3 }
            }}
            className="flex flex-col items-start text-left"
            style={{ perspective: "1000px" }}
          >
            <ProductCard
              src="/HalcyKatalog2.png"
              alt="Paris Voalette Hijab Persegi Premium"
              brand="HALCY"
              title="Paris Voalette Hijab Persegi Premium"
              price="Rp 27.900"
              originalPrice="Rp 54.000"
              reviews="1029 Reviews"
            />
          </motion.div>

          {/* Produk 3: Pashmina Kaos Celestia Premium */}
          <motion.div 
            ref={product3Ref}
            variants={productVariants}
            initial="hidden"
            animate={isProduct3InView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
            whileHover={{
              y: -10,
              scale: 1.03,
              transition: { duration: 0.3 }
            }}
            className="flex flex-col items-start text-left"
            style={{ perspective: "1000px" }}
          >
            <ProductCard
              src="/HalcyKatalog1.png"
              alt="Pashmina Kaos Celestia Premium"
              brand="HALCY"
              title="Pashmina Kaos Celestia Premium"
              price="Rp 49.900"
              originalPrice="Rp 98.000"
              reviews="729 Reviews"
            />
          </motion.div>

          {/* Produk 4: Paris Voalette Hijab Persegi Premium */}
          <motion.div 
            ref={product4Ref}
            variants={productVariants}
            initial="hidden"
            animate={isProduct4InView ? "visible" : "hidden"}
            transition={{ delay: 0.6 }}
            whileHover={{
              y: -10,
              scale: 1.03,
              transition: { duration: 0.3 }
            }}
            className="flex flex-col items-start text-left"
            style={{ perspective: "1000px" }}
          >
            <ProductCard
              src="/HalcyKatalog2.png"
              alt="Paris Voalette Hijab Persegi Premium"
              brand="HALCY"
              title="Paris Voalette Hijab Persegi Premium"
              price="Rp 27.900"
              originalPrice="Rp 54.000"
              reviews="1029 Reviews"
            />
          </motion.div>
        </div>

        {/* Tombol Explore More */}
        <motion.div 
          ref={buttonRef}
          variants={buttonVariants}
          initial="hidden"
          animate={isButtonInView ? "visible" : "hidden"}
          className="flex justify-center mt-12"
        >
          <motion.button 
            className="px-8 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition-all duration-300"
            whileHover={{
              scale: 1.1,
              y: -5,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
              backgroundColor: "#374151",
              transition: { duration: 0.3 }
            }}
            whileTap={{
              scale: 0.95,
              y: 0,
              transition: { duration: 0.1 }
            }}
          >
            <Link href={"https://id.shp.ee/23Du6F1"}>
              <motion.span
                whileHover={{
                  letterSpacing: "2px",
                  transition: { duration: 0.3 }
                }}
              >
                EXPLORE MORE
              </motion.span>
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

// Komponen ProductCard yang dapat digunakan kembali
type ProductCardProps = {
  src: string;
  alt: string;
  brand: string;
  title: string;
  price: string;
  originalPrice: string;
  reviews: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  src, alt, brand, title, price, originalPrice, reviews
}) => (
  <>
    <motion.div 
      className="w-full h-64 bg-gray-200 rounded-lg mb-4 overflow-hidden relative"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.4 }
      }}
      animate={{
        y: [0, -3, 0],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut" as const,
        }
      }}
    >
      {/* Subtle glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none z-10"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 1,
          boxShadow: "inset 0 0 20px rgba(234, 54, 151, 0.1)",
          transition: { duration: 0.3 }
        }}
      />
      
      <Image
        src={src}
        alt={alt}
        width={400}
        height={256}
        className="object-cover w-full h-full"
      />
    </motion.div>

    <div className="w-full">
      <motion.p 
        className="text-sm font-light text-gray-600 mb-1"
        whileHover={{
          color: "#ea3697",
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
      >
        {brand}
      </motion.p>

      <motion.h3 
        className="text-lg font-semibold text-gray-800 mb-2"
        whileHover={{
          color: "#ea3697",
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      >
        {title.split("").map((char, index) => (
          <motion.span
            key={index}
            whileHover={{
              y: -2,
              transition: { duration: 0.2 }
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h3>

      <motion.p 
        className="text-gray-900 mb-4"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
      >
        <motion.span 
          className="font-semibold"
          whileHover={{
            color: "#ea3697",
            transition: { duration: 0.2 }
          }}
        >
          {price}
        </motion.span>{" "}
        <span className="line-through text-gray-900">{originalPrice}</span>
      </motion.p>

      <div className="flex flex-col items-end text-right">
        <motion.p 
          className="text-gray-600 underline mb-2"
          whileHover={{
            color: "#ea3697",
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          {reviews}
        </motion.p>

        <motion.button 
          className="px-6 py-2 bg-[#ea3697] text-white font-medium rounded-md hover:shadow-lg transition-all duration-300"
          whileHover={{
            scale: 1.1,
            y: -3,
            boxShadow: "0 10px 25px rgba(234, 54, 151, 0.3)",
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
              "0 0 0 rgba(234, 54, 151, 0)",
              "0 0 10px rgba(234, 54, 151, 0.2)",
              "0 0 0 rgba(234, 54, 151, 0)",
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
              letterSpacing: "1px",
              transition: { duration: 0.3 }
            }}
          >
            BUY NOW
          </motion.span>
        </motion.button>
      </div>
    </div>
  </>
);