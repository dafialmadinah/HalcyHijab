import React from 'react'
import Image from "next/image";
import Link from "next/link";
export const SectionShop = () => {
  return (
    <section
  id="our-shop"
  className="w-full min-h-screen flex items-center justify-center bg-white pt-35 pb-10"
>
  <div className="sm:px-6 lg:px-10 relative">
    {/* Elemen dekoratif kupu-kupu dan daun
    <div className="absolute top-0 left-4 z-10">
      <Image
        src="/kupu.svg"
        alt="Butterfly decoration"
        width={40}
        height={20}
      />
    </div>
    <div className="absolute bottom-4 left-4 z-10">
      <Image
        src="/leaf.png"
        alt="Leaf decoration"
        width={50}
        height={60}
      />
    </div>
    <div className="absolute top-4 right-4 z-10">
      <Image
        src="/leaf.png"
        alt="Leaf decoration"
        width={50}
        height={60}
      />
    </div> */}

    {/* Judul */}
    <h2 className="hidden md:block text-4xl font-bold text-gray-800 text-center pb-10">
      Our Best-Selling Premium Hijab Collection
    </h2>

    {/* Grid Produk */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
      {/* Produk 1: Pashmina Kaos Celestia Premium */}
      <div className="flex flex-col items-start text-left">
        <div className="w-full h-64 bg-gray-200 rounded-lg mb-4 overflow-hidden">
          <Image
            src="/HalcyKatalog1.png"
            alt="Pashmina Kaos Celestia Premium"
            width={400}
            height={256}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full">
          <p className="text-sm font-light text-gray-600 mb-1">HALCY</p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Pashmina Kaos Celestia Premium</h3>
          <p className="text-gray-900 mb-4">
            <span className="font-semibold">Rp 49.900</span>{" "}
            <span className="line-through text-gray-900">Rp 98.000</span>
          </p>
          <div className="flex flex-col items-end text-right">
            <p className="text-gray-600 underline mb-2">729 Reviews</p>
            <button className="px-6 py-2 bg-[#ea3697] text-white font-medium rounded-md hover:shadow-lg hover:scale-105 transition-all duration-300">
              BUY NOW
            </button>
          </div>
        </div>
      </div>

      {/* Produk 2: Paris Voalette Hijab Persegi Premium */}
      <div className="flex flex-col items-start text-left">
        <div className="w-full h-64 bg-gray-200 rounded-lg mb-4 overflow-hidden">
          <Image
            src="/HalcyKatalog2.png"
            alt="Paris Voalette Hijab Persegi Premium"
            width={400}
            height={256}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full">
          <p className="text-sm font-light text-gray-600 mb-1">HALCY</p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Paris Voalette Hijab Persegi Premium</h3>
          <p className="text-gray-900 mb-4">
            <span className="font-semibold">Rp 27.900</span>{" "}
            <span className="line-through text-gray-900">Rp 54.000</span>
          </p>
          <div className="flex flex-col items-end text-right">
            <p className="text-gray-600 underline mb-2">1029 Reviews</p>
            <button className="px-6 py-2 bg-[#ea3697] text-white font-medium rounded-md hover:shadow-lg hover:scale-105 transition-all duration-300">
              BUY NOW
            </button>
          </div>
        </div>
      </div>

      {/* Produk 3: Pashmina Kaos Celestia Premium */}
      <div className="flex flex-col items-start text-left">
        <div className="w-full h-64 bg-gray-200 rounded-lg mb-4 overflow-hidden">
          <Image
            src="/HalcyKatalog1.png"
            alt="Pashmina Kaos Celestia Premium"
            width={400}
            height={256}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full">
          <p className="text-sm font-light text-gray-600 mb-1">HALCY</p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Pashmina Kaos Celestia Premium</h3>
          <p className="text-gray-900 mb-4">
            <span className="font-semibold">Rp 49.900</span>{" "}
            <span className="line-through text-gray-900">Rp 98.000</span>
          </p>
          <div className="flex flex-col items-end text-right">
            <p className="text-gray-600 underline mb-2">729 Reviews</p>
            <button className="px-6 py-2 bg-[#ea3697] text-white font-medium rounded-md hover:shadow-lg hover:scale-105 transition-all duration-300">
              BUY NOW
            </button>
          </div>
        </div>
      </div>

      {/* Produk 4: Paris Voalette Hijab Persegi Premium */}
      <div className="flex flex-col items-start text-left">
        <div className="w-full h-64 bg-gray-200 rounded-lg mb-4 overflow-hidden">
          <Image
            src="/HalcyKatalog2.png"
            alt="Paris Voalette Hijab Persegi Premium"
            width={400}
            height={256}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full">
          <p className="text-sm font-light text-gray-600 mb-1">HALCY</p>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Paris Voalette Hijab Persegi Premium</h3>
          <p className="text-gray-900 mb-4">
            <span className="font-semibold">Rp 27.900</span>{" "}
            <span className="line-through text-gray-900">Rp 54.000</span>
          </p>
          <div className="flex flex-col items-end text-right">
            <p className="text-gray-600 underline mb-2">1029 Reviews</p>
            <button className="px-6 py-2 bg-[#ea3697] text-white font-medium rounded-md hover:shadow-lg hover:scale-105 transition-all duration-300">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Tombol Explore More */}
    <div className="flex justify-center mt-12">
      <button className="px-8 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition-all duration-300">
        <Link href={"https://id.shp.ee/23Du6F1"}>EXPLORE MORE</Link>
      </button>
    </div>
  </div>
</section>
  )
}
