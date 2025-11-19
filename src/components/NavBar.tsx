"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function NavBar() {
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 500) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transform transition-transform duration-300
        ${showNav ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <nav className="relative bg-[#3C1868] text-white">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 hover:opacity-80 transition">
            <Image
              src="/logos/bam-logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="filter invert"
            />
          </div>
          {/* Links */}
          <div className="space-x-8 text-base font-medium">
            <a href="#about" className="hover:opacity-80 transition">
              About
            </a>
            {/* <a href="/" className="hover:opacity-80 transition">
              Symposium
            </a> */}
            <a href="#events" className="hover:opacity-80 transition">
              Events
            </a>
            <a href="#contact" className="hover:opacity-80 transition">
              Contact
            </a>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 w-full h-[2px]
                     bg-gradient-to-r from-pink-400 via-blue-300 to-purple-500"
        />
      </nav>
    </header>
  );
}
