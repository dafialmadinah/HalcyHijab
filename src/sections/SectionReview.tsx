import React from 'react'
import Image from "next/image";
export const SectionReview = () => {
  return (
    <section
      id="customer-review"
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-pink-50 relative"
    >
      {/* Elemen dekoratif
      <div className="absolute top-4 left-4 z-10">
        <Image
          src="/leaf.png" 
          alt="Circle decoration"
          width={60}
          height={60}
        />
      </div>
      <div className="absolute bottom-4 right-4 z-10">
        <Image
          src="/kincir.png" 
          alt="Circle decoration"
          width={60}
          height={60}
        />
      </div>
      <div className="absolute bottom-4 left-4 z-10">
        <Image
          src="/kincir.png"
          alt="Wind turbine decoration"
          width={50}
          height={50}
        />
      </div> */}
    
      <div className="relative max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Panah Navigasi di Kiri dan Kanan Section */}
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-800">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-800">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
    
        {/* Judul */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Customer Reviews
        </h2>
    
        {/* Grid Kartu Ulasan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Ulasan 1: Sarah Johnson */}
          <div className="relative flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md border-2 border-[#ea3697] min-h-[400px]">
            {/* Lingkaran kecil di pojok kanan atas */}
            <div className="absolute top-2 right-2 z-10">
              <Image
                src="/bulat.png"
                alt="Circle decoration"
                width={20}
                height={20}
              />
            </div>
            <Image
              src="/sarah.png"
              alt="Sarah Johnson"
              width={80}
              height={80}
              className="rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Sarah Johnson</h3>
            <p className="text-gray-600 mb-4">
            &quot;I absolutely love my Organic Cotton Hijab from Halcy Hijab! It’s not only stylish but also eco-friendly. Knowing that I’m making a positive impact on the environment with my purchase makes me feel great. Highly recommend this sustainable accessory!&quot;
            </p>
            {/* Bintang dan Emot Fixed di Bawah */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-between items-center px-6">
              {/* Bintang di pojok kiri bawah */}
              <div className="flex gap-1 text-[#ea3697]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              {/* Emot di pojok kanan bawah */}
              <div className="z-10">
                <Image
                  src="/emot.png" 
                  alt="Circle decoration"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
    
          {/* Ulasan 2: Mark Anderson */}
          <div className="relative flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md border-2 border-[#ea3697] min-h-[400px]">
            {/* Lingkaran kecil di pojok kanan atas */}
            <div className="absolute top-2 right-2 z-10">
              <Image
                src="/bulat.png"
                alt="Circle decoration"
                width={20}
                height={20}
              />
            </div>
            <Image
              src="/mark.png" 
              alt="Mark Anderson"
              width={80}
              height={80}
              className="rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mark Anderson</h3>
            <p className="text-gray-600 mb-4">
            &quot;The Bamboo Toothbrushes from Greenify are a game-changer! The quality is outstanding, and I love the fact that they are made from renewable bamboo. My oral care routine just got a lot greener, and I couldn’t be happier. Kudos to Greenify for offering such fantastic eco-friendly products!&quot;
            </p>
            {/* Bintang dan Emot Fixed di Bawah */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-between items-center px-6">
              {/* Bintang di pojok kiri bawah */}
              <div className="flex gap-1 text-[#ea3697]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              {/* Emotch di pojok kanan bawah */}
              <div className="z-10">
                <Image
                  src="/emot.png" 
                  alt="Circle decoration"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
    
          {/* Ulasan 3: Emily Lee */}
          <div className="relative flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md border-2 border-[#ea3697] min-h-[400px]">
            {/* Lingkaran kecil di pojok kanan atas */}
            <div className="absolute top-2 right-2 z-10">
              <Image
                src="/bulat.png"
                alt="Circle decoration"
                width={20}
                height={20}
              />
            </div>
            <Image
              src="/emeli.png"
              alt="Emily Lee"
              width={80}
              height={80}
              className="rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Emily Lee</h3>
            <p className="text-gray-600 mb-4">
            &quot;I recently bought the Hemp Backpack from Greenify, and I must say it’s a fantastic investment! The durability of the hemp material is impressive, and I feel good knowing I’m choosing a sustainable alternative. This backpack is perfect for my outdoor adventures and daily commutes. Thumbs up for the eco-conscious design!&quot;
            </p>
            {/* Bintang dan Emot Fixed di Bawah */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-between items-center px-6">
              {/* Bintang di pojok kiri bawah */}
              <div className="flex gap-1 text-[#ea3697]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              {/* Emot di pojok kanan bawah */}
              <div className="z-10">
                <Image
                  src="/emot.png" 
                  alt="Circle decoration"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
    
        {/* Indikator Titik */}
        <div className="flex justify-center items-center mt-8 gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ea3697]"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  )
}
