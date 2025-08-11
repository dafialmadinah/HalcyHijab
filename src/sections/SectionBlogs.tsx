import React from 'react'
import Image from "next/image";
export const SectionBlogs = () => {
  return (
    <section
      id="blogs"
      className="w-full min-h-screen flex items-center justify-center bg-[#ea3697] relative"
    >
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
    
        {/* Judul */}
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Blogs
        </h2>
    
        {/* Grid Artikel Blog */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Artikel 1 */}
          <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md overflow-hidden min-h-[450px]">
            <div className="w-full h-64 bg-gray-200 p-">
              <Image
                src="/blogs1.png"
                alt="Embracing Sustainability"
                width={400}
                height={256}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Embracing Sustainability</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                The Power of Eco-Friendly Products at Greenify
              </p>
              <div className="mt-auto">
                <button className="px-6 py-2 bg-[#ea3697] text-white font-medium rounded-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
    
          {/* Artikel 2 */}
          <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md overflow-hidden min-h-[450px]">
            <div className="w-full h-64 bg-gray-200">
              <Image
                src="/blogs2.png"
                alt="Sustainable Living Made Simple"
                width={400}
                height={256}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sustainable Living Made Simple</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                How Greenify Helps You Make a Difference
              </p>
              <div className="mt-auto">
                <button className="px-6 py-2 bg-[#ea3697] text-white font-medium rounded-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
    
          {/* Artikel 3 */}
          <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md overflow-hidden min-h-[450px]">
            <div className="w-full h-64 bg-gray-200">
              <Image
                src="/blogs3.png"
                alt="Greenify's Guide to Eco-Friendly Shopping"
                width={400}
                height={256}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Greenify Guide to Eco-Friendly Shopping</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Reducing Your Carbon Footprint One Purchase at a Time
              </p>
              <div className="mt-auto">
                <button className="px-6 py-2 bg-[#ea3697] text-white font-medium rounded-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
