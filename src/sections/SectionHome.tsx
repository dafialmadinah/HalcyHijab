import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const SectionHome = () => {
  return (
    <section
      id="home"
      className="w-full h-screen flex items-center bg-white pt-20 overflow-hidden"
    >
      <div className="flex w-full flex-col md:flex-row items-center justify-between">
        {/* LEFT: Text and button */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full px-6 sm:px-10 md:pl-20 lg:pl-40 pb-10 md:pb-20 flex flex-col gap-5 max-w-[750px] relative"
        >
          {/* Dekorasi kiri atas (gambar kupu) */}
          <div className="hidden md:block absolute -top-6 right-0 lg:right-10">
            <Image src="/kupu.svg" alt="Top Decoration" width={80} height={50} />
          </div>

          {/* Judul */}
          <h1 className="text-black text-[32px] lg:text-[50px] font-bold">
            Welcome to Halcy!
          </h1>

          <h2 className="text-black text-[25px] lg:text-[40px] font-light">
            Your Sustainable <br />
            <span className="text-[#ea3697] font-extrabold">
              Hijab <br /> Destination
            </span>
          </h2>

          {/* Subjudul */}
          <p className="text-black hidden md:block">
            &quot;Discover timeless style and comfort. Embrace Halcy Hijab for a
            conscious, sustainable way to wear your faith.&quot;
          </p>

          {/* Tombol & Dekorasi samping */}
          <div className="mt-4 flex items-center gap-4 w-fit">
            <button className="px-6 py-3 bg-[#ea3697] text-white font-medium rounded-md hover:shadow-lg hover:scale-90 lg:scale-100 lg:hover:scale-110 transition-transform duration-300">
              SHOP NOW
            </button>

            {/* Dekorasi kanan tombol */}
            <div className="hidden lg:flex pb-20">
              <Image src="/kupu.svg" alt="Decor Right" width={40} height={40} />
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Gambar */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="hidden md:block pr-10"
        >
          <div className="relative w-[300px] sm:w-[400px] lg:w-[500px] h-[400px] sm:h-[520px] lg:h-[625px]">
            {/* Background */}
            <Image
              src="/bgBanner.png"
              alt="Background"
              fill
              className="rounded-lg object-cover z-0"
            />
            {/* Gambar utama */}
            <Image
              src="/Banner.png"
              alt="Model"
              width={375}
              height={469}
              className="rounded-lg absolute z-10"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
  