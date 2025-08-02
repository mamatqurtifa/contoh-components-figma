"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const path = window.location.pathname;
    setActiveLink(path);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Current date and user info
  const currentDateTime = "2025-08-02 03:02:23";
  const currentUser = "mamatqurtifa";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.webp" 
                alt="BLUD SMKN 2 Depok Logo" 
                width={50} 
                height={50}
                className="mr-3"
              />
              <div className="flex flex-col">
                <span className={`font-bold text-xl font-['Alexandria'] ${isScrolled ? 'text-blue-dark' : 'text-white'}`}>BLUD</span>
                <span className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-white'}`}>SMKN 2 DEPOK SLEMAN</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="/" active={activeLink === '/'} isScrolled={isScrolled}>
              Beranda
            </NavLink>
            <NavLink href="/profil" active={activeLink === '/profil'} isScrolled={isScrolled}>
              Profil
            </NavLink>
            <NavLink href="/layanan" active={activeLink === '/layanan'} isScrolled={isScrolled}>
              Layanan
            </NavLink>
            <NavLink href="/produk-jasa" active={activeLink === '/produk-jasa'} isScrolled={isScrolled}>
              Produk Jasa
            </NavLink>
            <NavLink href="/berita" active={activeLink === '/berita'} isScrolled={isScrolled}>
              Berita
            </NavLink>
            <NavLink href="/kontak" active={activeLink === '/kontak'} isScrolled={isScrolled}>
              Kontak
            </NavLink>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${isScrolled ? 'text-gray-700 hover:text-blue' : 'text-white hover:text-white'}`}
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="/" active={activeLink === '/'}>Beranda</MobileNavLink>
            <MobileNavLink href="/profil" active={activeLink === '/profil'}>Profil</MobileNavLink>
            <MobileNavLink href="/layanan" active={activeLink === '/layanan'}>Layanan</MobileNavLink>
            <MobileNavLink href="/produk-jasa" active={activeLink === '/produk-jasa'}>Produk Jasa</MobileNavLink>
            <MobileNavLink href="/berita" active={activeLink === '/berita'}>Berita</MobileNavLink>
            <MobileNavLink href="/kontak" active={activeLink === '/kontak'}>Kontak</MobileNavLink>
          </div>
          <div className="px-4 py-3 border-t border-gray-200">
            <div className="text-sm text-gray-500">
              <p>Last updated: {currentDateTime}</p>
              <p>User: {currentUser}</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, active, isScrolled, children }) {
  return (
    <Link 
      href={href} 
      className={`relative font-medium py-2 px-1 transition-all duration-300 group
      ${active 
        ? (isScrolled ? 'text-blue font-semibold' : 'text-white font-semibold') 
        : (isScrolled ? 'text-gray-800 hover:text-blue' : 'text-white hover:text-white')
      }`}
    >
      {children}
      <span 
        className={`absolute inset-x-0 bottom-0 h-0.5 transform transition-all duration-300 
        ${active 
          ? 'bg-blue scale-x-100' 
          : 'bg-blue scale-x-0 group-hover:scale-x-100'
        }`}
      ></span>
    </Link>
  );
}

function MobileNavLink({ href, active, children }) {
  return (
    <Link 
      href={href} 
      className={`block px-3 py-2 rounded-xl text-base font-medium transition-all duration-300
      ${active 
        ? 'bg-blue text-white shadow-md' 
        : 'text-gray-800 hover:bg-blue hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
}