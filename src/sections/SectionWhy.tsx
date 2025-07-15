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

  return (
    <section
      id="why-choose"
      className="w-full  flex flex-col items-center justify-start bg-white pb-10"
    >
      {/* Judul */}
      <div
        ref={titleRef}
        className="hidden md:flex flex-row flex-wrap justify-center items-center gap-4 p-4 text-center lg:pb-40"
      >
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={isTitleInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl lg:text-5xl font-bold text-gray-800"
        >
          Why Choose
        </motion.h2>
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          animate={isTitleInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl lg:text-5xl font-bold text-gray-800"
        >
          Halcy Hijab?
        </motion.h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl px-6">
        {/* Box 1 */}
        <motion.div
          ref={box1Ref}
          initial={{ y: 100, opacity: 0 }}
          animate={isBox1InView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
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
          initial={{ y: 100, opacity: 0 }}
          animate={isBox2InView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
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
          initial={{ y: 100, opacity: 0 }}
          animate={isBox3InView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
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
          initial={{ y: 100, opacity: 0 }}
          animate={isBox4InView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
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
const Card: React.FC<CardProps> = ({img, title, desc}) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-24 h-24 rounded-full bg-[#f9e1e7] flex items-center justify-center mb-4">
      <Image src={img} alt={title} width={100} height={100} />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>

  
);
