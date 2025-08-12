"use client"
import Image from "next/image"

export const SectionBlogs = () => {
  return (
    <section
      id="blogs"
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ea3697] via-[#f54a9a] to-[#e91e63] relative overflow-hidden"
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-white rounded-full blur-lg animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full blur-md animate-ping delay-500"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-40 right-1/3 w-20 h-20 bg-white/30 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-white/40 rounded-full blur-lg animate-float-reverse"></div>
        <div className="absolute top-16 left-1/2 w-8 h-8 bg-white/50 rounded-full blur-sm animate-twinkle"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/3 right-20 w-6 h-6 border-2 border-white/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/3 left-16 w-4 h-20 bg-white/20 animate-sway"></div>
        
        {/* Moving gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
      </div>

      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Enhanced Judul with more animations */}
        <div className="text-center mb-16">
          <div className="animate-fade-in-down delay-100">
            <span className="text-white/60 text-sm font-medium tracking-widest uppercase mb-4 block animate-fade-in opacity-0 delay-200">
              Latest Articles
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-white via-pink-100 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl animate-gradient-shift">
              Blogs
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white/50 via-white to-white/50 mx-auto rounded-full animate-expand delay-400"></div>
        </div>

        {/* Enhanced Grid Artikel Blog */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Artikel 1 - Enhanced */}
          <div className="group flex flex-col items-center text-center bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-3xl overflow-hidden min-h-[450px] transform hover:-translate-y-4 hover:rotate-1 transition-all duration-700 animate-fade-in-up delay-100 border border-white/20 hover:border-white/40 relative">
            {/* Animated border glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ea3697]/20 via-[#f54a9a]/20 to-[#e91e63]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-border"></div>
            
            <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
              <Image
                src="/blogs1.png"
                alt="Embracing Sustainability"
                width={400}
                height={256}
                className="object-cover w-full h-full group-hover:scale-125 group-hover:rotate-2 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Animated overlay pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ea3697]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow relative z-10">
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#ea3697] transition-all duration-500 group-hover:scale-105 group-hover:animate-text-glow">
                Embracing Sustainability
              </h3>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                The Power of Eco-Friendly Products at Greenify
              </p>
              <div className="mt-auto">
                <button className="px-8 py-4 bg-gradient-to-r from-[#ea3697] to-[#f54a9a] text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-pink-500/40 hover:scale-110 transition-all duration-500 transform active:scale-95 group-hover:from-[#f54a9a] group-hover:to-[#ea3697] relative overflow-hidden animate-button-shine">
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                  <span className="flex items-center gap-2 relative z-10">
                    READ MORE
                    <svg
                      className="w-5 h-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500 animate-arrow-bounce"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Artikel 2 - Enhanced */}
          <div className="group flex flex-col items-center text-center bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-3xl overflow-hidden min-h-[450px] transform hover:-translate-y-4 hover:-rotate-1 transition-all duration-700 animate-fade-in-up delay-200 border border-white/20 hover:border-white/40 relative">
            {/* Animated border glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#e91e63]/20 via-[#ea3697]/20 to-[#f54a9a]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-border"></div>
            
            <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
              <Image
                src="/blogs2.png"
                alt="Sustainable Living Made Simple"
                width={400}
                height={256}
                className="object-cover w-full h-full group-hover:scale-125 group-hover:-rotate-2 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Animated overlay pattern */}
              <div className="absolute inset-0 bg-gradient-to-bl from-[#f54a9a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow relative z-10">
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#ea3697] transition-all duration-500 group-hover:scale-105 group-hover:animate-text-glow">
                Sustainable Living Made Simple
              </h3>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                How Greenify Helps You Make a Difference
              </p>
              <div className="mt-auto">
                <button className="px-8 py-4 bg-gradient-to-r from-[#ea3697] to-[#f54a9a] text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-pink-500/40 hover:scale-110 transition-all duration-500 transform active:scale-95 group-hover:from-[#f54a9a] group-hover:to-[#ea3697] relative overflow-hidden animate-button-shine">
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                  <span className="flex items-center gap-2 relative z-10">
                    READ MORE
                    <svg
                      className="w-5 h-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500 animate-arrow-bounce"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Artikel 3 - Enhanced */}
          <div className="group flex flex-col items-center text-center bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-3xl overflow-hidden min-h-[450px] transform hover:-translate-y-4 hover:rotate-1 transition-all duration-700 animate-fade-in-up delay-300 border border-white/20 hover:border-white/40 relative">
            {/* Animated border glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f54a9a]/20 via-[#e91e63]/20 to-[#ea3697]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-border"></div>
            
            <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
              <Image
                src="/blogs3.png"
                alt="Greenify's Guide to Eco-Friendly Shopping"
                width={400}
                height={256}
                className="object-cover w-full h-full group-hover:scale-125 group-hover:rotate-1 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Animated overlay pattern */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#e91e63]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow relative z-10">
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#ea3697] transition-all duration-500 group-hover:scale-105 group-hover:animate-text-glow">
                Greenify Guide to Eco-Friendly Shopping
              </h3>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Reducing Your Carbon Footprint One Purchase at a Time
              </p>
              <div className="mt-auto">
                <button className="px-8 py-4 bg-gradient-to-r from-[#ea3697] to-[#f54a9a] text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-pink-500/40 hover:scale-110 transition-all duration-500 transform active:scale-95 group-hover:from-[#f54a9a] group-hover:to-[#ea3697] relative overflow-hidden animate-button-shine">
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                  <span className="flex items-center gap-2 relative z-10">
                    READ MORE
                    <svg
                      className="w-5 h-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500 animate-arrow-bounce"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(360deg); }
          50% { transform: translateY(20px) rotate(180deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes sway {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes expand {
          from { width: 0; opacity: 0; }
          to { width: 6rem; opacity: 1; }
        }
        
        @keyframes pulse-border {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 5px rgba(234, 54, 151, 0.3); }
          50% { text-shadow: 0 0 20px rgba(234, 54, 151, 0.8), 0 0 30px rgba(234, 54, 151, 0.4); }
        }
        
        @keyframes arrow-bounce {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out forwards;
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 4s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-sway {
          animation: sway 3s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        
        .animate-expand {
          animation: expand 0.8s ease-out forwards;
        }
        
        .animate-pulse-border {
          animation: pulse-border 2s ease-in-out infinite;
        }
        
        .animate-text-glow {
          animation: text-glow 2s ease-in-out infinite;
        }
        
        .animate-arrow-bounce {
          animation: arrow-bounce 1s ease-in-out infinite;
        }
        
        .animate-button-shine {
          position: relative;
          overflow: hidden;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  )
}