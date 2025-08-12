"use client"
import React, { useState, useEffect } from 'react'
import Image from "next/image";

export const SectionNews = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section
      id="newsletter"
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/bgNews.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Enhanced overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/40 to-white/30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-pink-50/30 to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-white rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
        
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-pink-300/20 to-purple-300/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-32 right-32 w-52 h-52 bg-gradient-to-l from-blue-300/15 to-cyan-300/15 rounded-full blur-3xl animate-bounce" 
             style={{ animationDuration: '5s' }} />
      </div>
    
      <div className={`max-w-6xl px-4 sm:px-6 lg:px-8 py-12 relative z-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Enhanced Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/50 group hover:shadow-3xl transition-all duration-700">
          
          {/* Enhanced Image Section */}
          <div className={`w-full lg:w-5/12 p-4 lg:p-6 transition-all duration-700 ${
            isVisible ? 'animate-slide-in-left' : ''
          }`}>
            <div className="relative overflow-hidden rounded-2xl group-hover:scale-105 transition-transform duration-700">
              {/* Image glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              
              <div className="w-full h-80 lg:h-[450px] relative">
                <Image
                  src="/gambarNews.png"
                  alt="Eco-friendly products"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full rounded-2xl transition-all duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce"></div>
            </div>
          </div>
    
          {/* Enhanced Form Section */}
          <div className={`w-full lg:w-7/12 p-8 lg:p-12 flex flex-col transition-all duration-700 ${
            isVisible ? 'animate-slide-in-right' : ''
          }`}>
            
            {/* Enhanced Title */}
            <div className="text-center mb-8">
              <div className="inline-block">
                <span className="text-pink-600 text-sm font-medium tracking-wider uppercase mb-2 block opacity-80">
                  Stay Updated
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-800 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  Subscribe to Our Newsletter
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
              </div>
            </div>

            {/* Enhanced Form */}
            <div className="flex flex-col gap-6 w-full max-w-xl mx-auto">
              
              {/* Name Input */}
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full p-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-0 focus:border-pink-400 text-gray-900 placeholder-gray-500 transition-all duration-300 hover:border-gray-300 hover:shadow-lg"
                />
                {/* Animated border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 -z-10 transition-opacity duration-300 ${
                  focusedField === 'name' ? 'opacity-20' : ''
                }`}></div>
                
                {/* Floating label effect */}
                {formData.name && (
                  <label className="absolute -top-2 left-3 px-2 text-xs font-medium text-pink-600 bg-white rounded animate-fade-in">
                    Your Name
                  </label>
                )}
              </div>

              {/* Email Input */}
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full p-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-0 focus:border-pink-400 text-gray-900 placeholder-gray-500 transition-all duration-300 hover:border-gray-300 hover:shadow-lg"
                />
                {/* Animated border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 -z-10 transition-opacity duration-300 ${
                  focusedField === 'email' ? 'opacity-20' : ''
                }`}></div>
                
                {/* Floating label effect */}
                {formData.email && (
                  <label className="absolute -top-2 left-3 px-2 text-xs font-medium text-pink-600 bg-white rounded animate-fade-in">
                    Your Email
                  </label>
                )}
              </div>

              {/* Enhanced Submit Button */}
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitted}
                  className={`relative px-10 py-4 bg-gradient-to-r from-[#ea3697] to-[#d946ef] text-white font-bold rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 active:scale-95 overflow-hidden group/btn ${
                    isSubmitted ? 'animate-pulse' : ''
                  }`}
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-full group-hover/btn:translate-x-[-200%] transition-transform duration-1000"></div>
                  
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitted ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                        SUBSCRIBING...
                      </>
                    ) : (
                      <>
                        SUBSCRIBE
                        <svg 
                          className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </span>
                  
                  {/* Success checkmark */}
                  {isSubmitted && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </button>
              </div>
            </div>

            {/* Success Message */}
            {isSubmitted && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-2xl animate-fade-in">
                <p className="text-green-700 text-center font-medium">
                  🎉 Thank you for subscribing! Check your email for confirmation.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
          animation-delay: 0.2s;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  )
}