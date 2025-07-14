import React from 'react'
import Image from "next/image";
export const SectionNews = () => {
  return (
    <section
      id="newsletter"
      className="w-full min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/bgNews.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay putih transparan */}
      <div className="absolute inset-0 bg-white/45 z-0"></div>
    
      {/* Elemen dekoratif kupu-kupu dan daun
      <div className="absolute top-4 left-4 z-10">
        <Image
          src="/kupu.svg"
          alt="Butterfly decoration"
          width={50}
          height={50}
        />
      </div>
      <div className="absolute bottom-4 left-4 z-10">
        <Image
          src="/leaf2.png"
          alt="Leaf decoration"
          width={60}
          height={60}
        />
      </div>
      <div className="absolute bottom-4 right-4 z-10">
        <Image
          src="/bumiPink.png"
          alt="Leaf decoration"
          width={60}
          height={60}
        />
      </div> */}
    
      <div className="max-w-6xl px-4 sm:px-6 lg:px-8 py-12 relative z-20">
      {/* Container Gabungan untuk Gambar dan Form */}
      <div className="flex lg:flex-row items-center justify-around bg-white rounded-lg shadow-md overflow-hidden ">
        {/* Gambar di Sisi Kiri */}
        <div className="w-full lg:w-5/12 -ml-4 lg:-ml-8">
          <div className="w-full h-96 lg:h-[450px]">
            <Image
              src="/gambarNews.png"
              alt="Eco-friendly products"
              width={600}
              height={384}
              className="object-cover w-full h-full rounded-3xl"
            />
          </div>
        </div>
    
        {/* Formulir di Sisi Kanan */}
        <div className="w-full lg:w-7/12 lg:p-10 flex flex-col">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6 text-center whitespace-nowrap">
            Subscribe to Our Newsletter
          </h2>
          <form className="flex flex-col gap-5 w-full max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border-[0.5px] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ea3697] text-gray-900 placeholder-gray-600 placeholder-opacity-100"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border-[0.5px] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ea3697] text-gray-900 placeholder-gray-600 placeholder-opacity-100"
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="mt-4 bg-[#ea3697] text-white font-medium rounded-md text-center cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 px-6 py-3"
              >
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </section>
          
  )
}
