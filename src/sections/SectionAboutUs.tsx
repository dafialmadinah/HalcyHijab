import React from 'react'
import Image from "next/image";
export const SectionAboutUs = () => {
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
          <div className="absolute bottom-4 right-4 z-10">
            <Image
              src="/leaf.png"
              alt="Leaf decoration"
              width={60}
              height={60}
            />
          </div> */}
    
          {/* Konten utama */}
          <div className="text-center max-w-[800px] px-4 py-12 z-10">
            {/* Judul */}
            <h2 className="text-4xl font-bold text-black mb-4">About Us</h2>
            <span className="bg-white px-6 py-3 rounded-lg shadow-md inline-flex mb-4 text-3xl font-bold text-[#ea3697]">Halcy Hijab
            </span>
    
    
            {/* Deskripsi Utama */}
            <p className="text-lg text-black mb-8">
              At Halcy Hijab, we are more than just a fashion brand; we are a community committed to empowering women through modest fashion that embraces both style and sustainability. Our mission is to provide high-quality, eco-friendly hijabs that cater to modern women who value both elegance and environmental responsibility.
            </p>
    
            {/* Mission Statement */}
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Mission Statement</h4>
            <p className="text-black italic mb-8">
            &quot;To be the leading platform for sustainable and stylish hijabs, offering a range of fashion choices that embody both quality and environmental mindfulness.&quot;
            </p>
    
            {/* Vision Statement */}
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Vision Statement</h4>
            <p className="text-black italic mb-8">
            &quot;To inspire women everywhere to express their individuality through fashion that supports a greener world. We envision a future where every woman feels confident, stylish, and responsible while wearing Halcy Hijab as a step towards a more sustainable, ethical, and fashionable world.&quot;
            </p>
    
            {/* Tombol Read More */}
            <button className="px-6 py-3 bg-[#ea3697] text-white font-medium rounded-md hover:shadow-lg hover:scale-105 transition-all duration-300">
              READ MORE
            </button>
          </div>
        </section>
  )
}
