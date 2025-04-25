'use client'
import React from 'react';
import { MdOutlineShoppingBag } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';

const HeaderTop = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop-50, 
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="p-3">
            <Link href="/">
              <div className="text-[22px] font-sans text-[#ea3697] font-bold">
                Halcy Hijab
              </div>
            </Link>
          </div>

          {/* Menu Navigasi */}
          <div className="hidden lg:flex gap-6 items-center">
            <button onClick={() => handleScroll ("home")} className="text-gray-800 hover:text-[#ff66cc] transition-colors">Home</button>
            <Link href="https://id.shp.ee/23Du6F1" className="text-gray-800 hover:text-[#ff66cc] transition-colors">Shop</Link>
            <div className="relative group">
              <button className="text-gray-800 hover:text-[#ff66cc] transition-colors flex items-center">
                Categories
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2">
                <Link href="/categories/classic" className="block px-4 py-2 text-gray-800 hover:bg-pink-100">Classic</Link>
                <Link href="/categories/modern" className="block px-4 py-2 text-gray-800 hover:bg-pink-100">Modern</Link>
                <Link href="/categories/premium" className="block px-4 py-2 text-gray-800 hover:bg-pink-100">Premium</Link>
              </div>
            </div>
            {/* Link About Us dengan smooth scroll */}
            <button
              onClick={() => handleScroll("about-us")}
              className="text-gray-800 hover:text-[#ff66cc] transition-colors"
            >
              About Us
            </button>
            {/* Link Contact dengan smooth scroll */}
            <Link href="https://linktr.ee/halcyhijab" className="text-gray-800 hover:text-[#ff66cc] transition-colors">Contact Us</Link>
          </div>
          
          {/* Ikon */}
          <div className="flex gap-3">
            <Link href="/">
              <MdOutlineShoppingBag className="text-2xl text-gray-800 hover:text-[#ff66cc] transition-colors" />
            </Link>
            <Link href="/">
              <CgProfile className="text-2xl text-gray-800 hover:text-[#ff66cc] transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;