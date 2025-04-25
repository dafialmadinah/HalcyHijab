"use client";
import Image from "next/image";
import Link from "next/link";
import { GiEarthAmerica, GiDress, GiTrophy, GiRecycle } from "react-icons/gi";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Home() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="w-screen relative pt-16">
      {/* Section Home */}
      <section
  id="home"
  className="w-full h-screen flex items-center bg-cover bg-center relative bg-white"
>
  <div className="flex w-full items-center justify-between">
    {/* Left Side: Text Content */}
    <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px] relative">
      {/* Gambar kecil di sebelah kanan "Welcome to Halcy!" */}
      <div className="absolute top-[-30px] left-[400px] md:left-[500px] z-20 hidden md:block">
        <Image
          src="/kupu.svg"
          alt="Decorative image 1"
          width={50}
          height={50}
          className=""
        />
      </div>

      <h1 className="text-black text-[50px] font-bold">Welcome to Halcy!</h1>
      <h1 className="text-black text-[40px] font-light">
        Your Sustainable <br />
        <span className="text-[#ea3697] font-extrabold">
          Hijab <br /> Destination
        </span>
      </h1>
      <p className="text-black hidden md:block">
        "Discover timeless style and comfort. Embrace Halcy Hijab for a conscious, sustainable way to wear your faith."
      </p>
      {/* Tombol Shop now */}
      <div className="flex flex-col md:flex-row gap-4 mt-4 relative">
        <button
          onClick={() => handleScroll("our-shop")}
          className="cursor-pointer px-6 py-3 bg-[#ea3697] text-white font-medium rounded-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
        >
          SHOP NOW
        </button>
        {/* Gambar kecil di sebelah kanan "SHOP NOW" */}
        <div className="absolute top-[-20px] left-[150px] md:left-[180px] z-20 hidden md:block">
          <Image
            src="/kupu.svg"
            alt="Decorative image 2"
            width={50}
            height={50}
            className=""
          />
        </div>
      </div>
    </div>

    {/* Right Side: Stacked Images */}
    <div className="hidden md:block pr-0 relative">
      <div className="relative w-[500px] h-[625px]">
        {/* Gambar di bawah (halcy1.png) */}
        <Image
          src="/bgBanner.png"
          alt="Background image"
          width={500}
          height={625}
          className="rounded-lg absolute inset-0 z-0"
        />
        {/* Gambar di atas (halcy.png) - lebih kecil dan di tengah */}
        <Image
          src="/Banner.png"
          alt="Two women wearing hijabs"
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
    </div>
  </div>
</section>

<section
  id="why-choose"
  className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-pink-50 relative"
>
  {/* Bagian Atas: Why Choose */}
  <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
    <h2 className="relative -top-40 text-6xl font-bold text-gray-800 text-center">
      Why Choose Halcy Hijab?
    </h2>
    <div className="relative -top-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15">
      {/* Kolom 1: Sustainable Fabrics */}
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-[#f9e1e7] flex items-center justify-center mb-4">
          <Image
            src="/why1.png"
            alt="Sustainable Fabrics Icon"
            width={100}
            height={100}
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainable Fabrics</h3>
        <p className="text-gray-600">
          Each of our hijabs is made from high-quality, eco-conscious fabrics, offering both comfort and durability while supporting the environment.
        </p>
      </div>

      {/* Kolom 2: Conscious Design */}
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-[#f9e1e7] flex items-center justify-center mb-4">
          <Image
            src="/why2.png"
            alt="Conscious Design Icon"
            width={100}
            height={100}
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Conscious Design</h3>
        <p className="text-gray-600">
          Our designs cater to modern, modest fashion, ensuring you look stylish without compromising on your values. Fashion with purpose.
        </p>
      </div>

      {/* Kolom 3: Premium Quality */}
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-[#f9e1e7] flex items-center justify-center mb-4">
          <Image
            src="/why3.png"
            alt="Premium Quality Icon"
            width={100}
            height={100}
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Quality</h3>
        <p className="text-gray-600">
          We select only the finest materials to provide you with long-lasting hijabs that maintain their beauty and comfort through every wear.
        </p>
      </div>

      {/* Kolom 4: Elegant & Comfortable */}
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-[#f9e1e7] flex items-center justify-center mb-4">
          <Image
            src="/why4.png"
            alt="Elegant & Comfortable Icon"
            width={100}
            height={100}
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Elegant & Comfortable</h3>
        <p className="text-gray-600">
          Our hijabs are designed not only to give you the comfort you deserve, making them perfect for everyday wear.
        </p>
      </div>
    </div>
  </div>

  {/* Elemen dekoratif pink di bagian bawah */}
  <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#f4c2c2] rounded-tr-full opacity-50"></div>
  <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#f4c2c2] rounded-tl-full opacity-50"></div>
</section>

      {/* Section SHOP */}
      <section
  id="our-shop"
  className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-pink-50 relative"
>
  <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
    {/* Elemen dekoratif kupu-kupu dan daun */}
    <div className="absolute top-4 left-4 z-10">
      <Image
        src="/kupu.svg"
        alt="Butterfly decoration"
        width={100}
        height={50}
      />
    </div>
    <div className="absolute bottom-4 left-4 z-10">
      <Image
        src="/leaf.png"
        alt="Leaf decoration"
        width={100}
        height={60}
      />
    </div>
    <div className="absolute top-4 right-4 z-10">
      <Image
        src="/leaf.png"
        alt="Leaf decoration"
        width={100}
        height={60}
      />
    </div>

    {/* Judul */}
    <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
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

      {/* ABOUT US */}             
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

      {/* Elemen dekoratif kupu-kupu dan daun */}
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
      </div>

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
          "To be the leading platform for sustainable and stylish hijabs, offering a range of fashion choices that embody both quality and environmental mindfulness."
        </p>

        {/* Vision Statement */}
        <h4 className="text-2xl font-semibold text-gray-800 mb-4">Vision Statement</h4>
        <p className="text-black italic mb-8">
          "To inspire women everywhere to express their individuality through fashion that supports a greener world. We envision a future where every woman feels confident, stylish, and responsible while wearing Halcy Hijab as a step towards a more sustainable, ethical, and fashionable world."
        </p>

        {/* Tombol Read More */}
        <button className="px-6 py-3 bg-[#ea3697] text-white font-medium rounded-md hover:shadow-lg hover:scale-105 transition-all duration-300">
          READ MORE
        </button>
      </div>
    </section>

        {/* CUstomer Review*/}
        <section
  id="customer-review"
  className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-pink-50 relative"
>
  {/* Elemen dekoratif */}
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
  </div>

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
          "I absolutely love my Organic Cotton Hijab from Halcy Hijab! It’s not only stylish but also eco-friendly. Knowing that I’m making a positive impact on the environment with my purchase makes me feel great. Highly recommend this sustainable accessory!"
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
          "The Bamboo Toothbrushes from Greenify are a game-changer! The quality is outstanding, and I love the fact that they are made from renewable bamboo. My oral care routine just got a lot greener, and I couldn’t be happier. Kudos to Greenify for offering such fantastic eco-friendly products!"
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
          "I recently bought the Hemp Backpack from Greenify, and I must say it’s a fantastic investment! The durability of the hemp material is impressive, and I feel good knowing I’m choosing a sustainable alternative. This backpack is perfect for my outdoor adventures and daily commutes. Thumbs up for the eco-conscious design!"
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


      {/* Section BLOGS */}
      <section
  id="blogs"
  className="w-full min-h-screen flex items-center justify-center bg-[#ea3697] relative"
>
  <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
    {/* Elemen dekoratif kupu-kupu dan daun */}
    <div className="absolute top-4 left-4 z-10">
      <Image
        src="/kupuPutih.png" // Pastikan gambar ada di folder public
        alt="Butterfly decoration"
        width={50}
        height={50}
      />
    </div>
    <div className="absolute bottom-4 right-4 z-10">
      <Image
        src="/leaf.png" // Pastikan gambar ada di folder public
        alt="Leaf decoration"
        width={60}
        height={60}
      />
    </div>

    {/* Judul */}
    <h2 className="text-4xl font-bold text-white text-center mb-12">
      Blogs
    </h2>

    {/* Grid Artikel Blog */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Artikel 1 */}
      <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md overflow-hidden min-h-[450px]">
        <div className="w-full h-64 bg-gray-200">
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
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Greenify's Guide to Eco-Friendly Shopping</h3>
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

      {/* newsletter */}
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

  {/* Elemen dekoratif kupu-kupu dan daun */}
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
  </div>

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
      
{/* Section Contact Us (Footer) */}
<section
  id="contact-us"
  className="w-full bg-gradient-to-b from-pink-50 to-white"
>
  {/* Footer */}
  <footer className="w-full bg-[#1a1a1a] text-white py-12 relative overflow-hidden">
    {/* Elemen Dekoratif Lingkaran Pink */}
    <div className="absolute top-0 right-0 w-48 h-48 bg-[#ea3697] opacity-20 rounded-full -translate-y-1/2 translate-x-1/4"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Kolom Kiri: Logo, Navigasi, Ikon Sosial, Hak Cipta */}
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <div className="inline-block">
            <span className="text-xl font-bold bg-white text-[#ea3697] px-4 py-3 rounded-md">Halcy Hijab</span>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="text-lg font-semibold mb-4 mt-2">Pages</h3>
            <ul className="flex gap-4">
              <li>
                <button
                  onClick={() => handleScroll("home")}
                  className="text-gray-400 hover:text-white"
                >
                  Home
                </button>
              </li>
              <li><a href="https://id.shp.ee/23Du6F1" className="text-gray-400 hover:text-white">Shop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Categories</a></li>
              <li>
                <button
                  onClick={() => handleScroll("about-us")}
                  className="text-gray-400 hover:text-white"
                >
                  About us
                </button>
              </li>
              <li>
                <a
                  href="https://linktr.ee/halcyhijab"
                  className="text-gray-400 hover:text-white"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Ikon Media Sosial */}
          <div className="flex gap-4">
            <a
              href="https://instagram.com/halcyhijab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#ea3697] hover:text-white"
            >
              <FaInstagram className="text-lg" /> Instagram
            </a>
            <a
              href="https://tiktok.com/@halcyhijab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#ea3697] hover:text-white"
            >
              <FaTiktok className="text-lg" /> TikTok
            </a>
          </div>

          {/* Hak Cipta */}
          <div className="text-gray-400 text-sm">
            <p>© terms & services</p>
            <p>Greenify © all right reserved 2023</p>
          </div>
        </div>

        {/* Kolom Kanan: Kontak */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold">Contact us</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="text-[#ea3697]">📞</span>
              <span className="text-gray-400">+62 856-0499-4852</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#ea3697]">✉️</span>
              <span className="text-gray-400">halcyhijab@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#ea3697]">📍</span>
              <span className="text-gray-400">Pondokmelati, Bekasi</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</section>
    </main>
  );
}