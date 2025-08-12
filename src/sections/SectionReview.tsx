import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export const SectionReview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const reviews = [
    {
      name: "Sarah Johnson",
      image: "/sarah.png",
      review: "I absolutely love my Organic Cotton Hijab from Halcy Hijab! It&apos;s not only stylish but also eco-friendly. Knowing that I&apos;m making a positive impact on the environment with my purchase makes me feel great. Highly recommend this sustainable accessory!"
    },
    {
      name: "Mark Anderson", 
      image: "/mark.png",
      review: "The Bamboo Toothbrushes from Greenify are a game-changer! The quality is outstanding, and I love the fact that they are made from renewable bamboo. My oral care routine just got a lot greener, and I couldn&apos;t be happier. Kudos to Greenify for offering such fantastic eco-friendly products!"
    },
    {
      name: "Emily Lee",
      image: "/emeli.png", 
      review: "I recently bought the Hemp Backpack from Greenify, and I must say it&apos;s a fantastic investment! The durability of the hemp material is impressive, and I feel good knowing I&apos;m choosing a sustainable alternative. This backpack is perfect for my outdoor adventures and daily commutes. Thumbs up for the eco-conscious design!"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  const FloatingElements = () => (
    <>
      {/* Floating circles */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-30 animate-bounce" 
           style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-purple-200 rounded-full opacity-40 animate-bounce" 
           style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-pink-300 rounded-full opacity-35 animate-pulse" 
           style={{ animationDuration: '2s' }}></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-20 animate-spin" 
           style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-gradient-to-l from-purple-200 to-pink-200 rounded-full opacity-25 animate-ping" 
           style={{ animationDuration: '3s' }}></div>
    </>
  );

  return (
    <section
      id="customer-review"
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-pink-50 to-purple-100 relative overflow-hidden"
    >
      <FloatingElements />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,54,151,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.2),transparent_50%)]"></div>
      </div>

      <div className={`relative max-w-7xl px-4 sm:px-6 lg:px-8 py-12 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Navigation Arrows with Modern Design */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 group bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white"
        >
          <svg className="w-6 h-6 text-gray-600 group-hover:text-pink-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 group bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white"
        >
          <svg className="w-6 h-6 text-gray-600 group-hover:text-pink-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Animated Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-pulse">
            Customer Reviews
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className={`relative flex flex-col items-center text-center bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-pink-200 min-h-[450px] group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-105 ${
                hoveredCard === index ? 'bg-gradient-to-br from-white to-pink-50' : ''
              } ${
                index === currentSlide ? 'ring-2 ring-pink-400 ring-opacity-50' : ''
              }`}
              style={{
                animationDelay: `${index * 0.2}s`,
                animation: isVisible ? 'slideInUp 0.6s ease-out forwards' : 'none'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Decorative elements */}
              <div className="absolute top-3 right-3 z-10 transition-transform duration-300 group-hover:rotate-12">
                <div className="w-5 h-5 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Profile Image with Animation */}
              <div className="relative mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-spin opacity-75" 
                     style={{ animationDuration: '3s' }}></div>
                <Image
                  src={review.image}
                  alt={review.name}
                  width={80}
                  height={80}
                  className="relative rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>

              {/* Name with Gradient */}
              <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-pink-600 bg-clip-text text-transparent mb-4">
                {review.name}
              </h3>

              {/* Review Text */}
              <p className="text-gray-600 leading-relaxed flex-grow px-2">
                &ldquo;{review.review}&rdquo;
              </p>

              {/* Bottom Elements */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-between items-center px-8">
                {/* Animated Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-5 h-5 text-yellow-400 fill-current transition-all duration-300 hover:scale-125" 
                      viewBox="0 0 24 24"
                      style={{ 
                        animationDelay: `${i * 0.1}s`,
                        animation: hoveredCard === index ? 'twinkle 0.5s ease-in-out infinite alternate' : 'none'
                      }}
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                
                {/* Animated Emoji */}
                <div className="transition-transform duration-300 group-hover:animate-bounce">
                  <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">😊</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modern Slide Indicators */}
        <div className="flex justify-center items-center mt-12 gap-3">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide 
                  ? 'w-8 h-3 bg-gradient-to-r from-pink-500 to-purple-500' 
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes twinkle {
          0% { transform: scale(1) rotate(0deg); }
          100% { transform: scale(1.2) rotate(180deg); }
        }
        
        .group:hover .animate-bounce {
          animation-play-state: running;
        }
      `}</style>
    </section>
  );
};

export default SectionReview;