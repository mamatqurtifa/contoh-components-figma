"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/images/hero-slide-1.jpg',
      title: 'Selamat Datang di BLUD SMKN 2 Depok Sleman',
      description: 'Badan Layanan Umum Daerah untuk meningkatkan kualitas layanan pendidikan kejuruan'
    },
    {
      image: '/images/hero-slide-2.jpg',
      title: 'Pendidikan Bermutu untuk Masa Depan',
      description: 'Memberikan pelayanan pendidikan terbaik bagi peserta didik'
    },
    {
      image: '/images/hero-slide-3.jpg',
      title: 'Kerjasama Industri dan Pendidikan',
      description: 'Membangun kemitraan untuk meningkatkan kompetensi lulusan'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  // Current date display
  const currentDate = "2025-08-02";

  return (
    <div className="relative h-screen">
      {/* Slider */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="max-w-5xl mx-auto text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Alexandria']">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white mb-10">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="/profil" className="bg-primary hover:bg-primary-dark text-white font-medium px-8 py-3 rounded-md transition-all duration-300">
                  Pelajari Lebih Lanjut
                </a>
                <a href="/kontak" className="bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10 font-medium px-8 py-3 rounded-md transition-all duration-300">
                  Hubungi Kami
                </a>
              </div>
              <div className="mt-8 text-white text-sm">
                <p>Updated: {currentDate}</p>
                <p className="text-xs">User: mamatqurtifa</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}