"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import '@/app/globals.css';

const Header = () => {
  const gradientRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [gradientHeight, setGradientHeight] = useState(185);
  const [isPinned, setIsPinned] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [lineOpacity, setLineOpacity] = useState(0);
  
  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    
      rafId = requestAnimationFrame(() => {
        if (headerRef.current) {
          const headerHeight = headerRef.current.offsetHeight;
          const scrollY = window.scrollY;
          const maxScroll = headerHeight - 50;
    
          if (scrollY === 0) {
            setGradientHeight(185);
            setOpacity(1);
            setIsPinned(false);
            setLineOpacity(0);
          } else {
            const progress = Math.max(0, Math.min(1, scrollY / maxScroll));
            const newOpacity = Math.max(0, 1 - progress * 2);
            const newHeight = Math.round(150 - (progress * (150 - 55)));
    
            setGradientHeight(newHeight);
            setOpacity(newOpacity);
            setIsPinned(scrollY >= maxScroll);
            setLineOpacity(Math.min(0.3, progress));
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderNavItem = (text: string, xOffset: string, href: string) => (
    <div
      className={`fixed left-0 right-0 z-20 flex justify-center transition-opacity duration-300 ${
        isPinned ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transform: `translateX(${xOffset})`, top: '20px' }}
    >
      <Link href={href} passHref>
        <button
          className="text-2xl font-light text-white hover:text-orange-300 transition-colors duration-300 ease-in-out relative group"
          style={{ fontFamily: 'Roboto', background: 'none', border: 'none', cursor: 'pointer', padding: '5px 10px' }}
        >
          {text}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-300 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </button>
      </Link>
    </div>
  );

  return (
    <header
      ref={headerRef}
      className={`relative ${isPinned ? 'h-24' : 'h-48'} transition-height duration-500 ease-in-out`}
    >
      {/* Animated gradient background */}
      <div
        ref={gradientRef}
        className="fixed left-0 right-0 z-10 overflow-hidden will-change-transform transition-height duration-300 ease-out"
        style={{
          height: `${gradientHeight}px`,
          top: 0,
        }}
      >
        <Image
          src="/noisy-gradients-normal.png"
          alt="Header background"
          layout="fill"
          objectFit="cover"
          objectPosition="center top"
          quality={100}
          priority
        />
        {/* Bottom line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '1px',
            backgroundColor: `rgba(0, 0, 0, ${lineOpacity})`,
            transition: 'opacity 0.3s ease-out',
          }}
        />
      </div>

      {/* Navigation items */}
      {renderNavItem("ocaso", "-600px", "/")}
      {renderNavItem("FAQ", "-515px", "/faq")}
      {renderNavItem("beneficios", "-400px", "/beneficios")}
      {renderNavItem("cuenta", "-270px", "/cuenta")}

      {/* Logo */}
      <div
        className={`fixed left-0 right-0 z-20 flex justify-center transition-opacity duration-300 ${
          isPinned ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transform: 'translateX(-700px)', top: '8px' }}
      >
        <Image
          src="/Untitled-2.png"
          alt="Ocaso logo"
          width={70}
          height={70}
          priority
        />
      </div>

      {/* Header content */}
      <div className="relative z-20 flex items-center justify-between px-6 h-full">
        {/* Left side - empty for balance */}
        <div className="w-24"></div>

        {/* Center - Logo and text */}
        <div className="relative flex flex-col items-center transition-opacity duration-300" style={{ opacity }}>
          {/* Logo Image */}
          <div className="relative top-[-35px]">
            <Image
              src="/Untitled-2.png"
              alt="Ocaso logo"
              width={200}
              height={200}
              priority
            />
          </div>
          {/* Text with custom font */}
          <div className="absolute bottom-[-25px]">
            <span className="text-6xl font-light text-whiteColor" style={{ fontFamily: 'Roboto' }}>
              ocaso.
            </span>
          </div>
        </div>
          
        {/* Right side - Login button */}
        <div className="w-24 flex justify-end">
          <Button
            variant="ghost"
            className="text-whiteColor"
            style={{ backgroundColor: 'transparent', border: 'none', opacity: 0 }}
          >
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;